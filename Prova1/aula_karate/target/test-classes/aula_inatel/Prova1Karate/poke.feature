Feature: Testes para a API PokeAPI

Background:
  * configure base = 'https://pokeapi.co/api/v2'

Scenario: Obter Informações de um Pokémon por ID
  Given path '/pokemon/1'
  When method GET
  Then status 200
  And match $.name == 'bulbasaur'

Scenario: Listar Tipos de Pokémon
  Given path '/type'
  When method GET
  Then status 200
  And match $.count > 0

Scenario: Buscar Pokémon por Nome
  Given path '/pokemon'
  And param q = 'pikachu'
  When method GET
  Then status 200
  And match $.results[0].name == 'pikachu'

Scenario: Tentativa de Obter Informações de Pokémon Inexistente
  Given path '/pokemon/9999'
  When method GET
  Then status 404

Scenario: Atualizar as Habilidades de um Pokémon (utilizando método PATCH)
  Given path '/pokemon/25'
  And request { "abilities": [ { "ability": { "name": "static" } } ] }
  When method PATCH
  Then status 200
  And match $.name == 'pikachu'
  And match $.abilities[0].ability.name == 'static'
