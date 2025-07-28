import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, List, Clock, AlertCircle, CheckSquare } from "lucide-react";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  type: string;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

const Dashboard = () => {
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete Math Assignment',
      type: 'Assignment',
      deadline: '2024-01-15',
      priority: 'high',
      completed: false
    },
    {
      id: '2',
      title: 'Study for Physics Quiz',
      type: 'Exam Prep',
      deadline: '2024-01-18',
      priority: 'medium',
      completed: false
    },
    {
      id: '3',
      title: 'Read History Chapter 5',
      type: 'Reading',
      deadline: '2024-01-20',
      priority: 'low',
      completed: true
    }
  ]);

  const [view, setView] = useState<'list' | 'calendar'>('list');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const upcomingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Study Dashboard</h1>
            <p className="text-muted-foreground">Manage your study tasks and deadlines</p>
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setView(view === 'list' ? 'calendar' : 'list')}>
              {view === 'list' ? <Calendar className="w-4 h-4" /> : <List className="w-4 h-4" />}
              {view === 'list' ? 'Calendar' : 'List'} View
            </Button>
            <Button variant="hero" size="sm">
              <Plus className="w-4 h-4" />
              Add Task
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{tasks.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{upcomingTasks.length}</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{completedTasks.length}</div>
            </CardContent>
          </Card>
        </div>

        {/* Task List */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <List className="w-5 h-5" />
              Your Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingTasks.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CheckSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No pending tasks. Great job!</p>
              </div>
            ) : (
              upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-border"
                      checked={task.completed}
                      readOnly
                    />
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">{task.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Badge variant={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(task.deadline).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Completed Tasks */}
        {completedTasks.length > 0 && (
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <CheckSquare className="w-5 h-5" />
                Completed Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {completedTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 rounded-lg bg-accent/10 opacity-75">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-border"
                      checked={true}
                      readOnly
                    />
                    <div>
                      <h3 className="font-medium line-through">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">{task.type}</p>
                    </div>
                  </div>
                  
                  <Badge variant="success">
                    Completed
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;