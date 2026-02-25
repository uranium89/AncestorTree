import { supabase } from './supabase';
import type {
  Person, Family, Profile, Contribution, Event, Media,
  CreatePersonInput, UpdatePersonInput, CreateMediaInput, ContributionStatus, EventType,
} from '@/types';

// ═══════════════════════════════════════════════════════════════════════════
// People CRUD
// ═══════════════════════════════════════════════════════════════════════════

export async function getPeople(): Promise<Person[]> {
  const { data, error } = await supabase
    .from('people')
    .select('*')
    .order('generation', { ascending: true })
    .order('display_name', { ascending: true });
  
  if (error) throw error;
  return data || [];
}

export async function getPerson(id: string): Promise<Person | null> {
  const { data, error } = await supabase
    .from('people')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

export async function getPersonByHandle(handle: string): Promise<Person | null> {
  const { data, error } = await supabase
    .from('people')
    .select('*')
    .eq('handle', handle)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

export async function createPerson(input: CreatePersonInput): Promise<Person> {
  const { data, error } = await supabase
    .from('people')
    .insert(input)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function updatePerson(id: string, input: UpdatePersonInput): Promise<Person> {
  const { data, error } = await supabase
    .from('people')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function deletePerson(id: string): Promise<void> {
  const { error } = await supabase
    .from('people')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
}

export async function searchPeople(query: string): Promise<Person[]> {
  // Escape LIKE special characters to prevent pattern injection
  const escaped = query.replace(/[%_\\]/g, '\\$&');
  const { data, error } = await supabase
    .from('people')
    .select('*')
    .ilike('display_name', `%${escaped}%`)
    .order('display_name', { ascending: true })
    .limit(20);

  if (error) throw error;
  return data || [];
}

export async function getPeopleByGeneration(generation: number): Promise<Person[]> {
  const { data, error } = await supabase
    .from('people')
    .select('*')
    .eq('generation', generation)
    .order('display_name', { ascending: true });
  
  if (error) throw error;
  return data || [];
}

// ═══════════════════════════════════════════════════════════════════════════
// Families CRUD
// ═══════════════════════════════════════════════════════════════════════════

export async function getFamilies(): Promise<Family[]> {
  const { data, error } = await supabase
    .from('families')
    .select('*')
    .order('sort_order', { ascending: true });
  
  if (error) throw error;
  return data || [];
}

export async function getFamily(id: string): Promise<Family | null> {
  const { data, error } = await supabase
    .from('families')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

export async function getFamilyChildren(familyId: string): Promise<Person[]> {
  const { data, error } = await supabase
    .from('children')
    .select('person_id, sort_order')
    .eq('family_id', familyId)
    .order('sort_order', { ascending: true });
  
  if (error) throw error;
  if (!data || data.length === 0) return [];
  
  const personIds = data.map(c => c.person_id);
  const { data: people, error: peopleError } = await supabase
    .from('people')
    .select('*')
    .in('id', personIds);
  
  if (peopleError) throw peopleError;
  
  // Sort by original order
  const orderMap = new Map(data.map(c => [c.person_id, c.sort_order]));
  return (people || []).sort((a, b) => 
    (orderMap.get(a.id) || 0) - (orderMap.get(b.id) || 0)
  );
}

export async function createFamily(input: Omit<Family, 'id' | 'created_at' | 'updated_at'>): Promise<Family> {
  const { data, error } = await supabase
    .from('families')
    .insert(input)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function addChildToFamily(familyId: string, personId: string, sortOrder: number): Promise<void> {
  const { error } = await supabase
    .from('children')
    .insert({ family_id: familyId, person_id: personId, sort_order: sortOrder });
  
  if (error) throw error;
}

export async function removeChildFromFamily(familyId: string, personId: string): Promise<void> {
  const { error } = await supabase
    .from('children')
    .delete()
    .eq('family_id', familyId)
    .eq('person_id', personId);
  
  if (error) throw error;
}

// ═══════════════════════════════════════════════════════════════════════════
// Profiles (Users)
// ═══════════════════════════════════════════════════════════════════════════

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
  
  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

export async function getProfiles(): Promise<Profile[]> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data || [];
}

export async function updateProfile(userId: string, input: Partial<Profile>): Promise<Profile> {
  const { data, error } = await supabase
    .from('profiles')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('user_id', userId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

export async function updateUserRole(userId: string, role: Profile['role']): Promise<Profile> {
  const { data, error } = await supabase
    .from('profiles')
    .update({ role, updated_at: new Date().toISOString() })
    .eq('user_id', userId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// ═══════════════════════════════════════════════════════════════════════════
// Statistics
// ═══════════════════════════════════════════════════════════════════════════

export async function getStats(): Promise<{
  totalPeople: number;
  totalGenerations: number;
  totalChi: number;
  livingCount: number;
  deceasedCount: number;
}> {
  const { data: people, error } = await supabase
    .from('people')
    .select('id, generation, chi, is_living');
  
  if (error) throw error;
  
  const generations = new Set(people?.map(p => p.generation) || []);
  const chis = new Set(people?.filter(p => p.chi).map(p => p.chi) || []);
  const living = people?.filter(p => p.is_living).length || 0;
  const deceased = people?.filter(p => !p.is_living).length || 0;
  
  return {
    totalPeople: people?.length || 0,
    totalGenerations: generations.size,
    totalChi: chis.size,
    livingCount: living,
    deceasedCount: deceased,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// Family Tree Data
// ═══════════════════════════════════════════════════════════════════════════

export interface TreeData {
  people: Person[];
  families: Family[];
  children: { family_id: string; person_id: string; sort_order: number }[];
}

export async function getTreeData(): Promise<TreeData> {
  const [peopleRes, familiesRes, childrenRes] = await Promise.all([
    supabase.from('people').select('*'),
    supabase.from('families').select('*'),
    supabase.from('children').select('family_id, person_id, sort_order'),
  ]);
  
  if (peopleRes.error) throw peopleRes.error;
  if (familiesRes.error) throw familiesRes.error;
  if (childrenRes.error) throw childrenRes.error;
  
  return {
    people: peopleRes.data || [],
    families: familiesRes.data || [],
    children: childrenRes.data || [],
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// Events (Memorial Calendar)
// ═══════════════════════════════════════════════════════════════════════════

export async function getEvents(): Promise<Event[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function getEvent(id: string): Promise<Event | null> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

export async function getEventsByType(eventType: EventType): Promise<Event[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('event_type', eventType)
    .order('event_date', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function createEvent(input: Omit<Event, 'id' | 'created_at'>): Promise<Event> {
  const { data, error } = await supabase
    .from('events')
    .insert(input)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateEvent(id: string, input: Partial<Omit<Event, 'id' | 'created_at'>>): Promise<Event> {
  const { data, error } = await supabase
    .from('events')
    .update(input)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteEvent(id: string): Promise<void> {
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

// ═══════════════════════════════════════════════════════════════════════════
// Contributions (Edit Suggestions)
// ═══════════════════════════════════════════════════════════════════════════

export async function getContributions(status?: ContributionStatus): Promise<Contribution[]> {
  let query = supabase
    .from('contributions')
    .select('*')
    .order('created_at', { ascending: false });

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function getContribution(id: string): Promise<Contribution | null> {
  const { data, error } = await supabase
    .from('contributions')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null;
    throw error;
  }
  return data;
}

export async function createContribution(input: {
  author_id: string;
  target_person: string;
  change_type: Contribution['change_type'];
  changes: Record<string, unknown>;
  reason?: string;
}): Promise<Contribution> {
  const { data, error } = await supabase
    .from('contributions')
    .insert(input)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function reviewContribution(
  id: string,
  status: 'approved' | 'rejected',
  reviewerId: string,
  reviewNotes?: string
): Promise<Contribution> {
  // First, get the contribution to access changes and target person
  const { data: contribution, error: fetchError } = await supabase
    .from('contributions')
    .select('*')
    .eq('id', id)
    .single();

  if (fetchError) throw fetchError;

  // If approving an update, apply the changes to the person record
  if (status === 'approved' && contribution.change_type === 'update' && contribution.target_person) {
    const allowedFields = [
      'display_name', 'first_name', 'middle_name', 'surname',
      'phone', 'email', 'zalo', 'facebook', 'address', 'hometown',
      'birth_year', 'death_year', 'death_lunar', 'birth_place', 'death_place',
      'occupation', 'biography', 'notes',
    ];
    const safeChanges: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(contribution.changes)) {
      if (allowedFields.includes(key)) {
        safeChanges[key] = val;
      }
    }
    if (Object.keys(safeChanges).length > 0) {
      const { error: updateError } = await supabase
        .from('people')
        .update({ ...safeChanges, updated_at: new Date().toISOString() })
        .eq('id', contribution.target_person);

      if (updateError) throw updateError;
    }
  }

  // Update the contribution status
  const { data, error } = await supabase
    .from('contributions')
    .update({
      status,
      reviewed_by: reviewerId,
      reviewed_at: new Date().toISOString(),
      review_notes: reviewNotes,
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getContributionsByPerson(personId: string): Promise<Contribution[]> {
  const { data, error } = await supabase
    .from('contributions')
    .select('*')
    .eq('target_person', personId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

// ═══════════════════════════════════════════════════════════════════════════
// Media
// ═══════════════════════════════════════════════════════════════════════════

export async function getMediaByPerson(personId: string): Promise<Media[]> {
  const { data, error } = await supabase
    .from('media')
    .select('*')
    .eq('person_id', personId)
    .order('sort_order', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function createMedia(input: CreateMediaInput): Promise<Media> {
  const { data, error } = await supabase
    .from('media')
    .insert(input)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateMedia(id: string, input: Partial<CreateMediaInput>): Promise<Media> {
  const { data, error } = await supabase
    .from('media')
    .update(input)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteMedia(id: string): Promise<void> {
  const { error } = await supabase
    .from('media')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function setPrimaryMedia(personId: string, mediaId: string): Promise<void> {
  // Reset all, then set target. If step 2 fails, restore the previous primary.
  const { data: previousPrimary } = await supabase
    .from('media')
    .select('id')
    .eq('person_id', personId)
    .eq('is_primary', true)
    .maybeSingle();

  const { error: resetError } = await supabase
    .from('media')
    .update({ is_primary: false })
    .eq('person_id', personId);

  if (resetError) throw resetError;

  const { error: setError } = await supabase
    .from('media')
    .update({ is_primary: true })
    .eq('id', mediaId);

  if (setError) {
    // Restore previous primary on failure
    if (previousPrimary) {
      await supabase.from('media').update({ is_primary: true }).eq('id', previousPrimary.id);
    }
    throw setError;
  }
}
