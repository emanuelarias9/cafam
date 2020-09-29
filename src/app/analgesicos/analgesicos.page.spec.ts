import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnalgesicosPage } from './analgesicos.page';

describe('AnalgesicosPage', () => {
  let component: AnalgesicosPage;
  let fixture: ComponentFixture<AnalgesicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalgesicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalgesicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
