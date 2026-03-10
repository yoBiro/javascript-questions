import "./src/variaveis.js";
import { exercicioUm, exercicioDois } from "./src/strings.js";
import { operacoesBasicas, operacoesAvancadas } from "./src/aritmeticas.js";
import { ifComum, ifUnitario, ifComposto, ternario } from "./src/estruturaCondicional.js";
import { estruturaLogica } from "./src/estruturaLogica.js";
import { diaSemana, classificacaoIdade } from "./src/estruturaCase.js";
import { tabuada, multiplosCinco } from "./src/for.js";
import { contagemRegressiva, somaAteCem } from "./src/while.js";
import { fibonacci, potencia } from "./src/dowhile.js";
import { forEach } from "./src/forEach.js";
import { map } from "./src/map.js";
import { array, array2, array3, array4 } from "./src/array.js";

exercicioUm("Olá, ", "Gabriel!")
exercicioDois("Abóbora ", "do Halloween")
operacoesBasicas(10, 20)
operacoesAvancadas(2, 3)
ifComum(0)
ifUnitario("Cropped", "Tênis")
ifComposto("Ilhabela", 3)
ternario(true)
estruturaLogica()
diaSemana(3)
classificacaoIdade(25)
tabuada(5)
multiplosCinco()
contagemRegressiva(10)
somaAteCem()
fibonacci(10)
potencia(2, 3)
forEach(["Biro", "Leo", "Gabi", "Lipe"])
map(["APS", "PW1", "Design Digital", "Banco de Dados", "Algoritmos"])
array(["Maçã", "Banana", "Laranja", "Uva"])
array2([1, 2, 3, 4, 5])
array3(["Ford", "Ferrari", "Tesla"])
array4(["Lucas", "Gabriel", "João"])