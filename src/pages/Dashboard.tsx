
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, TrendingUp, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Courses Enrolled', value: '12', icon: BookOpen, color: 'text-blue-500' },
    { title: 'Hours Studied', value: '156', icon: Clock, color: 'text-green-500' },
    { title: 'Assignments Done', value: '28', icon: Award, color: 'text-purple-500' },
    { title: 'Performance', value: '85%', icon: TrendingUp, color: 'text-orange-500' },
  ];

  const recentCourses = [
    { name: 'Advanced Mathematics', progress: 75, instructor: 'RS', nextClass: 'Tomorrow 10:00 AM' },
    { name: 'Physics Fundamentals', progress: 60, instructor: 'RST', nextClass: 'Today 2:00 PM' },
    { name: 'Chemistry Lab', progress: 90, instructor: 'CR7', nextClass: 'Friday 11:00 AM' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Welcome back! Here's your learning progress overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-background/50 ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Courses */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="text-primary" size={24} />
              Your Courses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCourses.map((course, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">{course.name}</h3>
                  <Badge variant="secondary">By {course.instructor}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">Next class: {course.nextClass}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Schedule */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="text-primary" size={24} />
              Upcoming Classes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { subject: 'Physics Lab', time: 'Today 2:00 PM', instructor: 'RST', type: 'Live' },
              { subject: 'Math Problem Solving', time: 'Tomorrow 10:00 AM', instructor: 'RS', type: 'Live' },
              { subject: 'Chemistry Review', time: 'Friday 11:00 AM', instructor: 'Pessi', type: 'Recorded' },
            ].map((class_, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                <div>
                  <h3 className="font-semibold text-foreground">{class_.subject}</h3>
                  <p className="text-sm text-muted-foreground">with {class_.instructor}</p>
                  <p className="text-sm text-primary">{class_.time}</p>
                </div>
                <Badge variant={class_.type === 'Live' ? 'default' : 'secondary'}>
                  {class_.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
