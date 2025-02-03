import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmeCadastroPage } from './filme-cadastro.page';

describe('FilmeCadastroPage', () => {
  let component: FilmeCadastroPage;
  let fixture: ComponentFixture<FilmeCadastroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
