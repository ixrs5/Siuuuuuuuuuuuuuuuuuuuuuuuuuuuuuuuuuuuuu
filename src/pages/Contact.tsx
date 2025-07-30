
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Mail, MessageSquare, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/rejoan.siyam', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:callmers5.5@gmail.com';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Get in touch with us! We'd love to hear from you and help with any questions about RST Learning Platform.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Instagram Contact */}
        <Card className="glass-card hover-lift">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Instagram size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl text-foreground">Follow on Instagram</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Connect with us on Instagram for updates, behind-the-scenes content, and educational tips!
            </p>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Instagram Handle</p>
              <p className="text-primary font-semibold">@rejoan.siyam</p>
            </div>
            <Button 
              onClick={handleInstagramClick}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 neon-glow"
            >
              <Instagram className="mr-2" size={20} />
              Visit Instagram
            </Button>
          </CardContent>
        </Card>

        {/* Email Contact */}
        <Card className="glass-card hover-lift">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-electric rounded-full flex items-center justify-center mb-4">
              <Mail size={32} className="text-white" />
            </div>
            <CardTitle className="text-2xl text-foreground">Send us an Email</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Have questions, suggestions, or need support? Drop us an email and we'll get back to you soon!
            </p>
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Email Address</p>
              <p className="text-primary font-semibold">callmers5.5@gmail.com</p>
            </div>
            <Button 
              onClick={handleEmailClick}
              className="w-full bg-gradient-electric hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 neon-glow"
            >
              <Mail className="mr-2" size={20} />
              Send Email
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Info */}
      <Card className="glass-card max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <MessageSquare className="text-primary" size={24} />
            Get Support
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                We typically respond to emails within 24 hours
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Globe size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Always Available</h3>
              <p className="text-sm text-muted-foreground">
                Our social media channels are monitored regularly
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Mail size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Direct Communication</h3>
              <p className="text-sm text-muted-foreground">
                Reach out directly for personalized assistance
              </p>
            </div>
          </div>

          <div className="bg-background/50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Have Questions About Our Courses?
            </h3>
            <p className="text-muted-foreground mb-4">
              Whether you need help with course content, technical issues, or general inquiries, 
              we're here to help make your learning experience smooth and enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={handleEmailClick}
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10"
              >
                Ask a Question
              </Button>
              <Button 
                onClick={handleInstagramClick}
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10"
              >
                Follow for Updates
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
