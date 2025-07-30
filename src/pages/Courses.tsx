import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Clock, Users, Star, Filter, DollarSign } from 'lucide-react';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Advanced Mathematics Complete Course',
      instructor: 'RS',
      category: 'Mathematics',
      price: 24900,
      originalPrice: 33900,
      rating: 4.9,
      students: 1234,
      duration: '120 hours',
      lessons: 45,
      level: 'Advanced',
      isFree: false,
      isPopular: true,
      description: 'Master calculus, linear algebra, and advanced mathematical concepts with practical applications.'
    },
    {
      id: 2,
      title: 'Physics Fundamentals Masterclass',
      instructor: 'RST',
      category: 'Physics',
      price: 20900,
      originalPrice: 29900,
      rating: 4.8,
      students: 967,
      duration: '90 hours',
      lessons: 38,
      level: 'Intermediate',
      isFree: false,
      isPopular: false,
      description: 'Comprehensive physics course covering mechanics, thermodynamics, and quantum physics.'
    },
    {
      id: 3,
      title: 'Chemistry Lab Techniques',
      instructor: 'CR7',
      category: 'Chemistry',
      price: 0,
      originalPrice: 0,
      rating: 4.7,
      students: 2156,
      duration: '60 hours',
      lessons: 25,
      level: 'Beginner',
      isFree: true,
      isPopular: false,
      description: 'Learn essential laboratory techniques and safety procedures in chemistry.'
    },
    {
      id: 4,
      title: 'Organic Chemistry Deep Dive',
      instructor: 'Pessi',
      category: 'Chemistry',
      price: 16900,
      originalPrice: 23900,
      rating: 4.6,
      students: 543,
      duration: '75 hours',
      lessons: 32,
      level: 'Advanced',
      isFree: false,
      isPopular: false,
      description: 'Advanced organic chemistry with reaction mechanisms and synthesis strategies.'
    },
    {
      id: 5,
      title: 'Mathematical Problem Solving',
      instructor: 'Elon Musk',
      category: 'Mathematics',
      price: 0,
      originalPrice: 0,
      rating: 4.8,
      students: 1876,
      duration: '40 hours',
      lessons: 20,
      level: 'Beginner',
      isFree: true,
      isPopular: true,
      description: 'Build strong problem-solving skills with step-by-step mathematical approaches.'
    },
    {
      id: 6,
      title: 'Modern Physics Applications',
      instructor: 'RS',
      category: 'Physics',
      price: 29900,
      originalPrice: 38900,
      rating: 4.9,
      students: 432,
      duration: '110 hours',
      lessons: 42,
      level: 'Advanced',
      isFree: false,
      isPopular: false,
      description: 'Explore cutting-edge physics applications in technology and research.'
    },
  ];

  const categories = ['all', 'Mathematics', 'Physics', 'Chemistry'];
  const pricingOptions = ['all', 'free', 'paid'];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const pricingMatch = selectedPricing === 'all' || 
      (selectedPricing === 'free' && course.isFree) ||
      (selectedPricing === 'paid' && !course.isFree);
    return categoryMatch && pricingMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            All Courses
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover comprehensive courses designed for your success
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-background/50 border-primary/30">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="hover:bg-accent">
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Select value={selectedPricing} onValueChange={setSelectedPricing}>
            <SelectTrigger className="w-32 bg-background/50 border-primary/30">
              <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="all" className="hover:bg-accent">All</SelectItem>
              <SelectItem value="free" className="hover:bg-accent">Free</SelectItem>
              <SelectItem value="paid" className="hover:bg-accent">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="glass-card hover-lift relative">
            {course.isPopular && (
              <div className="absolute -top-2 -right-2 bg-gradient-electric text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                Popular
              </div>
            )}
            
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{course.category}</Badge>
                <Badge className={`${getLevelColor(course.level)} border`}>
                  {course.level}
                </Badge>
              </div>
              <CardTitle className="text-lg text-foreground leading-tight">
                {course.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">by {course.instructor}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {course.description}
              </p>
              
              {/* Course Stats */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <Clock size={12} className="text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen size={12} className="text-primary" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} className="text-primary" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  {course.isFree ? (
                    <span className="text-xl font-bold text-green-400">Free</span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">৳{course.price.toLocaleString()}</span>
                      {course.originalPrice > course.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ৳{course.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <Button 
                  size="sm"
                  className={course.isFree 
                    ? "bg-green-500 hover:bg-green-600 text-white" 
                    : "bg-gradient-electric hover:opacity-90 text-white"
                  }
                >
                  {course.isFree ? 'Enroll Free' : 'Buy Now'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen size={64} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No Courses Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters to find courses that match your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;
