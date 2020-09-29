import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntiinfecciososPage } from './antiinfecciosos.page';

describe('AntiinfecciososPage', () => {
  let component: AntiinfecciososPage;
  let fixture: ComponentFixture<AntiinfecciososPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiinfecciososPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntiinfecciososPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
