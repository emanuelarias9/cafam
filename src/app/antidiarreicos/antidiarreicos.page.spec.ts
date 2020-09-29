import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntidiarreicosPage } from './antidiarreicos.page';

describe('AntidiarreicosPage', () => {
  let component: AntidiarreicosPage;
  let fixture: ComponentFixture<AntidiarreicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntidiarreicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntidiarreicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
