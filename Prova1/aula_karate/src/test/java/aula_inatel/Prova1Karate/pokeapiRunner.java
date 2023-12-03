package aula_inatel.Prova1Karate;

import com.intuit.karate.junit5.Karate;

public class pokeapiRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("poke").relativeTo(getClass());
    }    
}

