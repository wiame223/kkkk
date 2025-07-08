import { TestBed } from '@angular/core/testing';
import { appComponent } from './app'; // ton composant standalone

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [appComponent], // ✅ standalone → on importe, pas déclarer
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render router outlet', () => {
    const fixture = TestBed.createComponent(appComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
