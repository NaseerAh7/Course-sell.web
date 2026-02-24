import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { CourseCard } from '../components/CourseCard';
import { courses, categories } from '../data/courses';

export const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Handle URL category param
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter courses
  useEffect(() => {
    let result = courses;

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(course => course.category === selectedCategory);
    }

    // Level filter
    if (selectedLevel !== 'All') {
      result = result.filter(course => course.level === selectedLevel);
    }

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        course =>
          course.title.toLowerCase().includes(term) ||
          course.shortDescription.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      );
    }

    setFilteredCourses(result);
  }, [selectedCategory, selectedLevel, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedLevel('All');
    setSearchTerm('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedLevel !== 'All' || searchTerm;

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16" data-testid="courses-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 
            className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4"
            data-testid="courses-title"
          >
            Explore Our Courses
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Discover a wide range of courses designed to help you master new skills and advance your career.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8" data-testid="filters-section">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500" />
            <Input
              type="text"
              placeholder="Search courses, instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-zinc-900/50 border-zinc-800 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 text-white placeholder:text-zinc-600 h-12"
              data-testid="search-input"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            <label className="text-sm font-medium text-zinc-400 mb-3 block flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  data-testid={`category-filter-${category.toLowerCase().replace(' ', '-')}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-[0_0_15px_-3px_rgba(139,92,246,0.4)]'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <label className="text-sm font-medium text-zinc-400 mb-3 block">
              Level
            </label>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  data-testid={`level-filter-${level.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedLevel === level
                      ? 'bg-cyan-600 text-white shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <div className="mt-6 pt-4 border-t border-zinc-800">
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="text-zinc-400 hover:text-white"
                data-testid="clear-filters-btn"
              >
                <X className="mr-2 h-4 w-4" />
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-zinc-400" data-testid="results-count">
            Showing <span className="text-white font-semibold">{filteredCourses.length}</span> courses
          </p>
          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              {selectedCategory !== 'All' && (
                <Badge className="border-purple-500/20 bg-purple-500/10 text-purple-400">
                  {selectedCategory}
                </Badge>
              )}
              {selectedLevel !== 'All' && (
                <Badge className="border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                  {selectedLevel}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-testid="courses-grid"
          >
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20" data-testid="no-results">
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No courses found</h3>
            <p className="text-zinc-400 mb-6">Try adjusting your filters or search term</p>
            <Button
              onClick={clearFilters}
              className="bg-purple-600 hover:bg-purple-500 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
