
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlayCircle, Clock, Users, Filter } from 'lucide-react';

const Live: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const liveClasses = [
    {
      id: 1,
      subject: 'Advanced Mathematics',
      instructor: 'RS',
      time: 'Today 2:00 PM',
      duration: '90 min',
      participants: 45,
      status: 'starting-soon',
      description: 'Calculus and Advanced Integration Techniques'
    },
    {
      id: 2,
      subject: 'Physics Fundamentals',
      instructor: 'RST',
      time: 'Today 4:00 PM',
      duration: '75 min',
      participants: 32,
      status: 'scheduled',
      description: 'Quantum Physics and Wave Mechanics'
    },
    {
      id: 3,
      subject: 'Chemistry Lab',
      instructor: 'CR7',
      time: 'Tomorrow 10:00 AM',
      duration: '120 min',
      participants: 28,
      status: 'scheduled',
      description: 'Organic Chemistry Reactions and Lab Work'
    },
    {
      id: 4,
      subject: 'Advanced Mathematics',
      instructor: 'Pessi',
      time: 'Tomorrow 3:00 PM',
      duration: '90 min',
      participants: 38,
      status: 'scheduled',
      description: 'Linear Algebra and Matrix Operations'
    },
  ];

  const subjects = ['all', 'Mathematics', 'Physics', 'Chemistry'];
  
  const filteredClasses = selectedSubject === 'all' 
    ? liveClasses 
    : liveClasses.filter(c => c.subject.toLowerCase().includes(selectedSubject.toLowerCase()));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'starting-soon': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'scheduled': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'starting-soon': return 'Starting Soon';
      case 'scheduled': return 'Scheduled';
      default: return 'Unknown';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Live Classes
          </h1>
          <p className="text-muted-foreground text-lg">
            Join upcoming live sessions within 48 hours
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

      {/* Live Classes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredClasses.map((class_) => (
          <Card key={class_.id} className="glass-card hover-lift">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-foreground">{class_.subject}</CardTitle>
                  <p className="text-muted-foreground">with {class_.instructor}</p>
                </div>
                <Badge className={`${getStatusColor(class_.status)} border`}>
                  {getStatusText(class_.status)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{class_.description}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span>{class_.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PlayCircle size={16} className="text-primary" />
                  <span>{class_.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  <span>{class_.participants} enrolled</span>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button 
                  className="flex-1 bg-gradient-electric hover:opacity-90 text-white"
                  disabled={class_.status !== 'starting-soon'}
                >
                  {class_.status === 'starting-soon' ? 'Join Now' : 'Remind Me'}
                </Button>
                <Button variant="outline" size="sm" className="border-primary/30">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <PlayCircle size={64} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No Live Classes</h3>
          <p className="text-muted-foreground">
            {selectedSubject === 'all' 
              ? 'No live classes scheduled for the next 48 hours.' 
              : `No live classes for ${selectedSubject} in the next 48 hours.`}
          </p>
        </div>
      )}
    </div>
  );
};

export default Live;
