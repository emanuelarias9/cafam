import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntialergicosPage } from './antialergicos.page';

describe('AntialergicosPage', () => {
  let component: AntialergicosPage;
  let fixture: ComponentFixture<AntialergicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntialergicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntialergicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
