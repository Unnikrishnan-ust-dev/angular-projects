import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenComponent } from './token.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TokenComponent', () => {
  let component: TokenComponent;
  let fixture: ComponentFixture<TokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenComponent,HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
