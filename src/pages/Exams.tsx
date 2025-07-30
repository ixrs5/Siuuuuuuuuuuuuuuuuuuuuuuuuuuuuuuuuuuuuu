
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Clock, Calendar, Award, TrendingUp } from 'lucide-react';

const Exams: React.FC = () => {
  const liveExams = [
    {
      id: 1,
      title: 'Advanced Mathematics Final',
      subject: 'Mathematics',
      date: '2024-01-20',
      time: '10:00 AM',
      duration: '120 min',
      totalMarks: 100,
      status: 'upcoming',
      instructor: 'Siyam'
    },
    {
      id: 2,
      title: 'Physics Chapter Test',
      subject: 'Physics',
      date: '2024-01-22',
      time: '2:00 PM',
      duration: '90 min',
      totalMarks: 75,
      status: 'upcoming',
      instructor: 'Tuhi'
    },
    {
      id: 3,
      title: 'Chemistry Lab Assessment',
      subject: 'Chemistry',
      date: '2024-01-25',
      time: '11:00 AM',
      duration: '150 min',
      totalMarks: 80,
      status: 'upcoming',
      instructor: 'Lutu'
    },
  ];

  const pastExams = [
    {
      id: 4,
      title: 'Calculus Midterm',
      subject: 'Mathematics',
      date: '2024-01-10',
      duration: '100 min',
      totalMarks: 80,
      obtainedMarks: 72,
      percentage: 90,
      status: 'completed',
      instructor: 'Siyam'
    },
    {
      id: 5,
      title: 'Quantum Physics Quiz',
      subject: 'Physics',
      date: '2024-01-08',
      duration: '60 min',
      totalMarks: 50,
      obtainedMarks: 45,
      percentage: 90,
      status: 'completed',
      instructor: 'Tuhi'
    },
    {
      id: 6,
      title: 'Organic Chemistry Test',
      subject: 'Chemistry',
      date: '2024-01-05',
      duration: '75 min',
      totalMarks: 60,
      obtainedMarks: 51,
      percentage: 85,
      status: 'completed',
      instructor: 'Lutu'
    },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getGradeColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-400';
    if (percentage >= 80) return 'text-blue-400';
    if (percentage >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Exams
        </h1>
        <p className="text-muted-foreground text-lg">
          Manage your upcoming exams and review past results
        </p>
      </div>

      <Tabs defaultValue="live" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-96 bg-background/50 border border-primary/20">
          <TabsTrigger value="live" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Live Exams
          </TabsTrigger>
          <TabsTrigger value="past" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Past Exams
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {liveExams.map((exam) => (
              <Card key={exam.id} className="glass-card hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-foreground">{exam.title}</CardTitle>
                      <p className="text-muted-foreground">by {exam.instructor}</p>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Upcoming
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{formatDate(exam.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{exam.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-primary" />
                      <span>{exam.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-primary" />
                      <span>{exam.totalMarks} marks</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1 bg-gradient-electric hover:opacity-90 text-white">
                      Start Exam
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pastExams.map((exam) => (
              <Card key={exam.id} className="glass-card hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-foreground">{exam.title}</CardTitle>
                      <p className="text-muted-foreground">by {exam.instructor}</p>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      Completed
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{formatDate(exam.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{exam.duration}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-background/50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Score</span>
                      <span className="font-semibold text-foreground">
                        {exam.obtainedMarks}/{exam.totalMarks}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Percentage</span>
                      <span className={`font-bold text-lg ${getGradeColor(exam.percentage)}`}>
                        {exam.percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" className="flex-1 border-primary/30">
                      View Results
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/30">
                      <TrendingUp size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Performance Summary */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="text-primary" size={24} />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">88%</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">6</div>
              <div className="text-sm text-muted-foreground">Exams Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-sm text-muted-foreground">Upcoming Exams</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Exams;
