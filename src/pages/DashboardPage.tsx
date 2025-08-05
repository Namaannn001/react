import React, { useState } from 'react';
import { StoryCard } from '../components/app/StoryCard';
import { Button } from '../components/ui/Button';
import type { Story } from '../types';

export function DashboardPage() {
  // FAKE STATIC DATA until we connect to Supabase
  const [stories, setStories] = useState<Story[]>([
    {
      id: '1',
      created_at: new Date().toISOString(),
      title: 'The Secret of the Marble Garden',
      premise: 'A hidden tomb is discovered near the Taj Mahal by a construction crew. Two young archaeologists decide to venture in, only to find something that defies all logic.',
      genre: 'Mystery',
      author_id: 'user-1',
      participants: [{id: 'user-1', username: 'You'}]
    },
    {
      id: '2',
      created_at: new Date().toISOString(),
      title: 'Echoes of the Yamuna',
      premise: 'A collaborative story about strange signals emanating from the river at night.',
      genre: 'Sci-Fi',
      author_id: 'user-2',
      participants: [{id: 'user-1', username: 'You'}, {id: 'user-2', username: 'Priya'}, {id: 'user-3', username: 'Rohan'}]
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <Button variant="primary">Create New Story</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map(story => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}