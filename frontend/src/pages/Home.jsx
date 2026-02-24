import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, BookOpen, Award, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { CourseCard } from '../components/CourseCard';
import { courses } from '../data/courses';

export const Home = () => {
  const featuredCourses = courses.slice(0, 3);

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Learners' },
    { icon: BookOpen, value: '200+', label: 'Expert Courses' },
    { icon: Award, value: '95%', label: 'Success Rate' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 mb-8">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">New courses added weekly</span>
            </div>

            {/* Heading */}
            <h1 
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
              data-testid="hero-title"
            >
              Master New Skills with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
                Expert-Led Courses
              </span>
            </h1>

            {/* Subheading */}
            <p 
              className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10"
              data-testid="hero-subtitle"
            >
              Join thousands of learners advancing their careers with our curated selection of 
              professional courses in Web Development, Data Science, and Design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/courses">
                <Button 
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] px-8"
                  data-testid="hero-browse-btn"
                >
                  Browse Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="border-zinc-700 hover:border-zinc-500 bg-transparent text-zinc-100 hover:bg-zinc-900"
                data-testid="hero-watch-btn"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 mb-3">
                  <stat.icon className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-zinc-900/50" data-testid="featured-courses-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider mb-2 block">
                Featured
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Popular Courses
              </h2>
            </div>
            <Link to="/courses" className="mt-4 sm:mt-0">
              <Button 
                variant="ghost" 
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                data-testid="view-all-courses-btn"
              >
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24" data-testid="categories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-purple-400 font-medium text-sm uppercase tracking-wider mb-2 block">
              Explore
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Development',
                description: 'Build modern websites and applications',
                courses: 45,
                image: 'https://images.unsplash.com/photo-1738255654134-1877cb984a8f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbiUyMGRhcmt8ZW58MHx8fHwxNzcxOTYwNTA1fDA&ixlib=rb-4.1.0&q=85',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Data Science',
                description: 'Analyze data and build AI models',
                courses: 38,
                image: 'https://images.pexels.com/photos/17484901/pexels-photo-17484901.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Design',
                description: 'Create beautiful user experiences',
                courses: 32,
                image: 'https://images.unsplash.com/photo-1764737740462-2a310c7b2c39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbmVyJTIwbW9uaXRvcnxlbnwwfHx8fDE3NzE5NjA1MDd8MA&ixlib=rb-4.1.0&q=85',
                color: 'from-orange-500 to-red-500'
              }
            ].map((category, index) => (
              <Link 
                key={index}
                to={`/courses?category=${encodeURIComponent(category.title)}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                data-testid={`category-card-${index}`}
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${category.color} mb-4`} />
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-2">{category.description}</p>
                  <span className="text-cyan-400 text-sm font-medium">{category.courses} Courses</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900/50" data-testid="cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/20 p-12 text-center">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto mb-8">
                Join our community of learners and take the first step towards mastering new skills today.
              </p>
              <Link to="/register">
                <Button 
                  size="lg"
                  className="bg-white text-zinc-900 hover:bg-zinc-100 shadow-lg"
                  data-testid="cta-get-started-btn"
                >
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-400" />
              <span className="font-heading text-lg font-bold text-white">
                Course<span className="text-purple-400">Hub</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm">
              © 2024 CourseHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm">Privacy</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm">Terms</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
