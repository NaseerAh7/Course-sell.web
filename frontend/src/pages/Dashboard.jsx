import { Link } from 'react-router-dom';
import { BookOpen, Award, Clock, TrendingUp, Play, Download, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { courses, purchasedCourses, getCourseById } from '../data/courses';

export const Dashboard = () => {
  // Get purchased course details
  const myCoursesData = purchasedCourses.map(pc => ({
    ...pc,
    course: getCourseById(pc.courseId)
  }));

  const completedCourses = myCoursesData.filter(c => c.progress === 100);
  const inProgressCourses = myCoursesData.filter(c => c.progress < 100);

  // Stats
  const stats = [
    { 
      icon: BookOpen, 
      label: 'Enrolled Courses', 
      value: myCoursesData.length,
      color: 'purple'
    },
    { 
      icon: Award, 
      label: 'Completed', 
      value: completedCourses.length,
      color: 'green'
    },
    { 
      icon: Clock, 
      label: 'Hours Learned', 
      value: '86',
      color: 'cyan'
    },
    { 
      icon: TrendingUp, 
      label: 'Avg Progress', 
      value: `${Math.round(myCoursesData.reduce((sum, c) => sum + c.progress, 0) / myCoursesData.length)}%`,
      color: 'amber'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-purple-600/20 text-purple-400',
      green: 'bg-green-600/20 text-green-400',
      cyan: 'bg-cyan-600/20 text-cyan-400',
      amber: 'bg-amber-600/20 text-amber-400',
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16" data-testid="dashboard-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 
            className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4"
            data-testid="dashboard-title"
          >
            My Dashboard
          </h1>
          <p className="text-zinc-400 text-lg">
            Track your progress and continue learning
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" data-testid="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
              data-testid={`stat-card-${index}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${getColorClasses(stat.color)}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-bold text-white font-mono mb-1">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* In Progress Courses */}
        <div className="mb-12" data-testid="in-progress-section">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold text-white">Continue Learning</h2>
            <Link to="/courses">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
                Browse More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {inProgressCourses.map((item) => (
              <div 
                key={item.courseId}
                className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group hover:border-purple-500/30 transition-all"
                data-testid={`course-progress-${item.courseId}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Course Image */}
                  <div className="relative w-full md:w-48 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.course.image} 
                      alt={item.course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                        <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="text-cyan-400 text-sm font-medium mb-1">{item.course.category}</p>
                        <h3 className="font-heading text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {item.course.title}
                        </h3>
                      </div>
                      <span className="text-2xl font-bold text-purple-400 font-mono whitespace-nowrap">
                        {item.progress}%
                      </span>
                    </div>

                    <p className="text-zinc-500 text-sm mb-4">
                      {item.lessonsCompleted} of {item.totalLessons} lessons completed
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <Progress 
                        value={item.progress} 
                        className="h-2 bg-zinc-800"
                        data-testid={`progress-bar-${item.courseId}`}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-zinc-600">
                        Last accessed: {new Date(item.lastAccessed).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                      <Link to={`/courses/${item.courseId}`}>
                        <Button 
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-500 text-white"
                          data-testid={`continue-btn-${item.courseId}`}
                        >
                          Continue
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div data-testid="certificates-section">
          <h2 className="font-heading text-2xl font-bold text-white mb-6">My Certificates</h2>

          {completedCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completedCourses.map((item) => (
                <div 
                  key={item.courseId}
                  className="relative overflow-hidden rounded-2xl"
                  data-testid={`certificate-${item.courseId}`}
                >
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url('https://images.pexels.com/photos/28428591/pexels-photo-28428591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />

                  {/* Content */}
                  <div className="relative bg-gradient-to-br from-purple-900/80 to-cyan-900/80 border border-purple-500/30 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="h-5 w-5 text-amber-400" />
                          <span className="text-amber-400 text-sm font-semibold">Certificate Earned</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">
                          {item.course.title}
                        </h3>
                        <p className="text-zinc-400 text-sm mb-4">
                          Completed on {new Date(item.certificateDate).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                        <div className="flex items-center gap-3">
                          <Button 
                            size="sm"
                            className="bg-white text-zinc-900 hover:bg-zinc-100"
                            data-testid={`download-cert-${item.courseId}`}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                          <Button 
                            size="sm"
                            variant="outline"
                            className="border-white/30 text-white hover:bg-white/10"
                          >
                            Share
                          </Button>
                        </div>
                      </div>
                      <div className="w-24 h-24 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                        <Award className="h-12 w-12 text-amber-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-zinc-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Certificates Yet</h3>
              <p className="text-zinc-500 mb-6">Complete a course to earn your first certificate</p>
              <Link to="/courses">
                <Button className="bg-purple-600 hover:bg-purple-500 text-white">
                  Browse Courses
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Completion Stats */}
        <div className="mt-12 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6" data-testid="completion-stats">
          <h2 className="font-heading text-xl font-bold text-white mb-6">Learning Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-zinc-800/50 rounded-xl">
              <p className="text-4xl font-bold text-purple-400 font-mono mb-2">
                {myCoursesData.reduce((sum, c) => sum + c.lessonsCompleted, 0)}
              </p>
              <p className="text-zinc-400">Total Lessons Completed</p>
            </div>
            <div className="text-center p-6 bg-zinc-800/50 rounded-xl">
              <p className="text-4xl font-bold text-cyan-400 font-mono mb-2">
                {completedCourses.length}
              </p>
              <p className="text-zinc-400">Courses Finished</p>
            </div>
            <div className="text-center p-6 bg-zinc-800/50 rounded-xl">
              <p className="text-4xl font-bold text-green-400 font-mono mb-2">
                7
              </p>
              <p className="text-zinc-400">Day Learning Streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
