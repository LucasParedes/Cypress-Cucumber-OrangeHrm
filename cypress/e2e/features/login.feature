Feature: Iniciar sesión
  COMO usuario de la web
  QUIERO poder iniciar sesión con mis credenciales
  PARA acceder correctamente a mi cuenta

  Background: Precondiciones
    Given que estoy en la página de inicio de sesión de OrangeHRM

  Scenario Outline: Validación de inicio de sesión "<scenario>"
    When ingreso el usuario "<usuario>" y la contraseña "<contraseña>" y hago clic en el botón Login
    Then debería ver "<mensaje>"

    Examples:
      | scenario | usuario | contraseña | mensaje                   |
      | valido   | Admin   | admin123   | la pantalla del dashboard |
      | invalido | lucas   | lucas1234  | Invalid credentials       |

  Scenario: Validación de los campos obligatorios
    When dejo los dos campos vacíos y intento iniciar sesión
    Then debería ver el mensaje de error "Required"
