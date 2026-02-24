import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, BookOpen, Award, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { getCourseById, courses } from '../data/courses';
import { CourseCard } from '../components/CourseCard';
import { toast } from 'sonner';

export const CourseDetail = () => {
  const { id } = useParams();
  const course = getCourseById(id);

  if (!course) {
    return (
      <div className="min-h-screen bg-zinc-950 pt-24 flex items-center justify-center" data-testid="course-not-found">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Course Not Found</h1>
          <p className="text-zinc-400 mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/courses">
            <Button className="bg-purple-600 hover:bg-purple-500 text-white">
              Browse Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    console.log(`Purchasing course: ${course.title} for $${course.price}`);
    toast.success(`Added "${course.title}" to cart!`, {
      description: `Price: $${course.price}`,
    });
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'border-green-500/20 bg-green-500/10 text-green-400';
      case 'Intermediate':
        return 'border-blue-500/20 bg-blue-500/10 text-blue-400';
      case 'Advanced':
        return 'border-purple-500/20 bg-purple-500/10 text-purple-400';
      default:
        return 'border-zinc-500/20 bg-zinc-500/10 text-zinc-400';
    }
  };

  const relatedCourses = courses
    .filter(c => c.category === course.category && c.id !== course.id)
    .slice(0, 2);

  const curriculum = [
    { title: 'Introduction & Setup', lessons: 8, duration: '1h 30m' },
    { title: 'Core Fundamentals', lessons: 12, duration: '3h 45m' },
    { title: 'Advanced Concepts', lessons: 15, duration: '4h 20m' },
    { title: 'Real-World Projects', lessons: 10, duration: '5h 15m' },
    { title: 'Best Practices & Tips', lessons: 8, duration: '2h 30m' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16" data-testid="course-detail-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/courses" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors" data-testid="back-to-courses">
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
                data-testid="course-detail-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              <button 
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play preview"
              >
                <div className="w-20 h-20 rounded-full bg-purple-600/90 flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                  <Play className="h-8 w-8 text-white ml-1" fill="white" />
                </div>
              </button>
            </div>

            {/* Course Info */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={getLevelColor(course.level)}>
                {course.level}
              </Badge>
              <Badge className="border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                {course.category}
              </Badge>
            </div>

            <h1 
              className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4"
              data-testid="course-detail-title"
            >
              {course.title}
            </h1>

            <p className="text-zinc-400 text-lg mb-6" data-testid="course-detail-description">
              {course.fullDescription}
            </p>

            {/* Instructor */}
            <div className="flex items-center gap-4 mb-8 p-4 bg-zinc-900/60 rounded-xl border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                {course.instructor.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-zinc-500">Instructor</p>
                <p className="text-white font-medium">{course.instructor}</p>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Clock, label: 'Duration', value: course.duration },
                { icon: BookOpen, label: 'Lessons', value: course.lessons },
                { icon: Users, label: 'Students', value: course.students.toLocaleString() },
                { icon: Star, label: 'Rating', value: course.rating, highlight: true },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800"
                >
                  <stat.icon className={`h-5 w-5 mb-2 ${stat.highlight ? 'text-amber-400' : 'text-purple-400'}`} />
                  <p className="text-sm text-zinc-500">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Curriculum */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">Course Curriculum</h2>
              <div className="space-y-3">
                {curriculum.map((section, index) => (
                  <div 
                    key={index}
                    className="bg-zinc-900/60 rounded-xl p-4 border border-zinc-800 flex items-center justify-between group hover:border-purple-500/30 transition-colors"
                    data-testid={`curriculum-section-${index}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400 font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-white font-medium">{section.title}</p>
                        <p className="text-sm text-zinc-500">{section.lessons} lessons • {section.duration}</p>
                      </div>
                    </div>
                    <Play className="h-5 w-5 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* What You'll Learn */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-white mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Master core concepts and fundamentals',
                  'Build real-world projects from scratch',
                  'Learn industry best practices',
                  'Get hands-on experience with tools',
                  'Develop problem-solving skills',
                  'Earn a certificate of completion',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              {/* Price */}
              <div className="mb-6">
                <span 
                  className="text-4xl font-bold text-white font-mono"
                  data-testid="course-detail-price"
                >
                  ${course.price}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-6">
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] h-12 text-base"
                  onClick={handleBuyNow}
                  data-testid="buy-now-btn"
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-zinc-700 hover:border-zinc-500 bg-transparent text-zinc-100 hover:bg-zinc-800 h-12"
                  data-testid="add-to-cart-btn"
                >
                  Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-4 pt-6 border-t border-zinc-800">
                {[
                  { icon: Clock, text: 'Lifetime access' },
                  { icon: BookOpen, text: `${course.lessons} lessons included` },
                  { icon: Award, text: 'Certificate of completion' },
                  { icon: Users, text: 'Community access' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-zinc-400">
                    <feature.icon className="h-5 w-5 text-cyan-400" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Money Back */}
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-green-400 text-sm text-center">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-2xl font-bold text-white mb-8">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <CourseCard key={relatedCourse.id} course={relatedCourse} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
