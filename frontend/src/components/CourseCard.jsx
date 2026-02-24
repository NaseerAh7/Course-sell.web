import { Link } from 'react-router-dom';
import { Clock, Users, Star, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const CourseCard = ({ course }) => {
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

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]"
      data-testid={`course-card-${course.id}`}
    >
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-testid={`course-image-${course.id}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge className={getLevelColor(course.level)}>
            {course.level}
          </Badge>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
          <span className="text-cyan-400 font-medium">{course.category}</span>
        </div>

        <h3 
          className="font-heading text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors"
          data-testid={`course-title-${course.id}`}
        >
          {course.title}
        </h3>

        <p 
          className="text-sm text-zinc-400 mb-4 line-clamp-2"
          data-testid={`course-description-${course.id}`}
        >
          {course.shortDescription}
        </p>

        {/* Course Meta */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="h-3.5 w-3.5 fill-amber-400" />
            <span>{course.rating}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <div>
            <span 
              className="text-2xl font-bold text-white font-mono"
              data-testid={`course-price-${course.id}`}
            >
              ${course.price}
            </span>
          </div>
          <Link to={`/courses/${course.id}`}>
            <Button 
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 group/btn"
              data-testid={`course-view-details-${course.id}`}
            >
              View Details
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
