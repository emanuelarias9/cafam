import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicamentoDetallePage } from './medicamento-detalle.page';

describe('MedicamentoDetallePage', () => {
  let component: MedicamentoDetallePage;
  let fixture: ComponentFixture<MedicamentoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicamentoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
