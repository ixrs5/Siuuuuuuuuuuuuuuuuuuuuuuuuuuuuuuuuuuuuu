
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Clock, Calendar, Filter } from 'lucide-react';

const Recorded: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const recordedClasses = [
    {
      id: 1,
      subject: 'Advanced Mathematics',
      instructor: 'RS',
      title: 'Calculus Integration Techniques',
      date: '2024-01-15',
      duration: '85 min',
      views: 234,
      description: 'Complete guide to advanced integration methods and applications'
    },
    {
      id: 2,
      subject: 'Physics Fundamentals',
      instructor: 'RST',
      title: 'Quantum Mechanics Basics',
      date: '2024-01-12',
      duration: '92 min',
      views: 189,
      description: 'Introduction to quantum physics and wave-particle duality'
    },
    {
      id: 3,
      subject: 'Chemistry Lab',
      instructor: 'CR7',
      title: 'Organic Reactions Lab Session',
      date: '2024-01-10',
      duration: '110 min',
      views: 156,
      description: 'Hands-on laboratory work with organic chemical reactions'
    },
    {
      id: 4,
      subject: 'Advanced Mathematics',
      instructor: 'Pessi',
      title: 'Linear Algebra Fundamentals',
      date: '2024-01-08',
      duration: '78 min',
      views: 298,
      description: 'Matrix operations, vector spaces, and linear transformations'
    },
    {
      id: 5,
      subject: 'Physics Fundamentals',
      instructor: 'Elon Musk',
      title: 'Electromagnetic Fields',
      date: '2024-01-05',
      duration: '95 min',
      views: 167,
      description: 'Understanding electric and magnetic field interactions'
    },
    {
      id: 6,
      subject: 'Chemistry Lab',
      instructor: 'CR7',
      title: 'Analytical Chemistry Methods',
      date: '2024-01-03',
      duration: '88 min',
      views: 203,
      description: 'Quantitative analysis techniques and laboratory procedures'
    },
  ];

  const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry'];
  
  const filteredClasses = selectedSubject === 'all' 
    ? recordedClasses 
    : recordedClasses.filter(c => c.subject.toLowerCase().includes(selectedSubject.toLowerCase()));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Recorded Classes
          </h1>
          <p className="text-muted-foreground text-lg">
            Access your past class recordings anytime
          </p>
        </div>
        
        {/* Filter */}
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-muted-foreground" />
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-48 bg-background/50 border-primary/30">
              <SelectValue placeholder="Filter by subject" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject} className="hover:bg-accent">
                  {subject === 'all' ? 'All Subjects' : subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Recorded Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClasses.map((class_) => (
          <Card key={class_.id} className="glass-card hover-lift">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="mb-2">
                  {class_.subject}
                </Badge>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} />
                  {formatDate(class_.date)}
                </div>
              </div>
              <CardTitle className="text-lg text-foreground leading-tight">
                {class_.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">with {class_.instructor}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{class_.description}</p>
              
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-primary" />
                  <span>{class_.duration}</span>
                </div>
                <div className="text-muted-foreground">
                  {class_.views} views
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-electric hover:opacity-90 text-white flex items-center gap-2"
              >
                <Play size={16} />
                Watch Recording
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <Play size={64} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No Recorded Classes</h3>
          <p className="text-muted-foreground">
            {selectedSubject === 'all' 
              ? 'No recorded classes available at the moment.' 
              : `No recorded classes for ${selectedSubject} available.`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Recorded;
