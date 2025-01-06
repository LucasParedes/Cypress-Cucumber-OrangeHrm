@regresion
Feature: Filter for a category section by search bar
  COMO usuario de la web
  QUIERO poder filtrar la busqueda de la secciones
  PARA encontrar los resultados buscados

  Background: Precondiciones
    Given que estoy logueado en OrangeHRM
    And estoy en el dashboard

  Scenario Outline: Validar que devuelva la categoria segun la que se ingresa
    When se ingresa el nombre de la categoria a filtrar <"categoria">
    Then quiero visualizar la categoria ingresada
