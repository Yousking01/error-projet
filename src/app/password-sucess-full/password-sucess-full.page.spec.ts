import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordSucessFullPage } from './password-sucess-full.page';

describe('PasswordSucessFullPage', () => {
  let component: PasswordSucessFullPage;
  let fixture: ComponentFixture<PasswordSucessFullPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordSucessFullPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordSucessFullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
