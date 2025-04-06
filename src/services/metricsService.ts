
import { Counter, Gauge, Histogram, Registry } from 'prom-client';

// Create a Registry to register metrics
const register = new Registry();

// Initialize metrics for the application
export class MetricsService {
  private static instance: MetricsService;
  
  // Page views counter per route
  private pageViewsCounter: Counter;
  
  // API request duration histogram
  private apiRequestDuration: Histogram;
  
  // Active user sessions gauge
  private activeUserSessions: Gauge;
  
  // Request errors counter
  private requestErrors: Counter;
  
  // Movie bookings counter
  private movieBookings: Counter;
  
  // Application load time histogram
  private appLoadTime: Histogram;
  
  // Component render time histogram
  private componentRenderTime: Histogram;

  private constructor() {
    // Initialize page views counter
    this.pageViewsCounter = new Counter({
      name: 'cinebooker_page_views_total',
      help: 'Total number of page views',
      labelNames: ['route'],
      registers: [register]
    });

    // Initialize API request duration histogram
    this.apiRequestDuration = new Histogram({
      name: 'cinebooker_api_request_duration_seconds',
      help: 'Duration of API requests in seconds',
      labelNames: ['endpoint', 'method', 'status'],
      buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
      registers: [register]
    });

    // Initialize active user sessions gauge
    this.activeUserSessions = new Gauge({
      name: 'cinebooker_active_user_sessions',
      help: 'Number of active user sessions',
      registers: [register]
    });

    // Initialize request errors counter
    this.requestErrors = new Counter({
      name: 'cinebooker_request_errors_total',
      help: 'Total number of request errors',
      labelNames: ['route', 'error_type'],
      registers: [register]
    });

    // Initialize movie bookings counter
    this.movieBookings = new Counter({
      name: 'cinebooker_movie_bookings_total',
      help: 'Total number of movie bookings',
      labelNames: ['movie_id', 'theater_id'],
      registers: [register]
    });

    // Initialize app load time histogram
    this.appLoadTime = new Histogram({
      name: 'cinebooker_app_load_time_seconds',
      help: 'Application load time in seconds',
      buckets: [0.1, 0.5, 1, 2, 5],
      registers: [register]
    });

    // Initialize component render time histogram
    this.componentRenderTime = new Histogram({
      name: 'cinebooker_component_render_time_seconds',
      help: 'Component render time in seconds',
      labelNames: ['component'],
      buckets: [0.01, 0.05, 0.1, 0.5, 1],
      registers: [register]
    });
  }

  public static getInstance(): MetricsService {
    if (!MetricsService.instance) {
      MetricsService.instance = new MetricsService();
    }
    return MetricsService.instance;
  }

  // Record a page view for a specific route
  public recordPageView(route: string): void {
    this.pageViewsCounter.inc({ route });
  }

  // Record API request duration
  public recordApiRequestDuration(endpoint: string, method: string, status: string, duration: number): void {
    this.apiRequestDuration.observe({ endpoint, method, status }, duration);
  }

  // Update active user sessions count
  public setActiveUserSessions(count: number): void {
    this.activeUserSessions.set(count);
  }

  // Increment active user sessions
  public incrementActiveUserSessions(): void {
    this.activeUserSessions.inc();
  }

  // Decrement active user sessions
  public decrementActiveUserSessions(): void {
    this.activeUserSessions.dec();
  }

  // Record a request error
  public recordRequestError(route: string, errorType: string): void {
    this.requestErrors.inc({ route, error_type: errorType });
  }

  // Record a movie booking
  public recordMovieBooking(movieId: string, theaterId: string): void {
    this.movieBookings.inc({ movie_id: movieId, theater_id: theaterId });
  }

  // Record app load time
  public recordAppLoadTime(duration: number): void {
    this.appLoadTime.observe(duration);
  }

  // Record component render time
  public recordComponentRenderTime(component: string, duration: number): void {
    this.componentRenderTime.observe({ component }, duration);
  }

  // Get metrics for Prometheus
  public async getMetrics(): Promise<string> {
    return register.metrics();
  }
}

export default MetricsService.getInstance();
