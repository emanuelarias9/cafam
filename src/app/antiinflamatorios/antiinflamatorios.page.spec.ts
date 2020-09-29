import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntiinflamatoriosPage } from './antiinflamatorios.page';

describe('AntiinflamatoriosPage', () => {
  let component: AntiinflamatoriosPage;
  let fixture: ComponentFixture<AntiinflamatoriosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiinflamatoriosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntiinflamatoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
