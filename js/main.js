var Neat = neataptic.Neat;
var Methods = neataptic.Methods;
var Config  = neataptic.Config;
var Architect = neataptic.Architect;

var ITERATIONS        = 300;
var START_HIDDEN_SIZE = 4;
var MUTATION_RATE     = 1000000;
var ELITISM_PERCENT   = 0.1;

Config.warnings = false;


function initNeat() {
    neat = new Neat(
        14,
        4,
        null,
        {
            mutation: [
              Methods.Mutation.ADD_NODE,
              Methods.Mutation.SUB_NODE,
              Methods.Mutation.ADD_CONN,
              Methods.Mutation.SUB_CONN,
              Methods.Mutation.MOD_WEIGHT,
              Methods.Mutation.MOD_BIAS,
              Methods.Mutation.MOD_ACTIVATION,
              Methods.Mutation.ADD_GATE,
              Methods.Mutation.SUB_GATE,
              Methods.Mutation.ADD_SELF_CONN,
              Methods.Mutation.SUB_SELF_CONN,
              Methods.Mutation.ADD_BACK_CONN,
              Methods.Mutation.SUB_BACK_CONN
            ],
            popsize: POP_SIZE,
            mutationRate: MUTATION_RATE,
            elitism: Math.round(ELITISM_PERCENT * POP_SIZE),
            network: new Architect.Random(
              14,
              START_HIDDEN_SIZE,
              4
            )
          },
    );
}

function startEval() {

  trimps = [];
  for (var genome in neat.population) {
    genome = neat.population[genome];
    trimps.push(new Trympe(trimps.length % DIM.W, Math.floor(trimps.length / DIM.W), genome, [random(0, 255), random(0, 255), (random(0, 255))]));
  }
}

function endEval() {
    let avg = 0;
    for (let brain of neat.population)
      avg += brain.score;
    avg /= neat.population.length;
    console.log("Gen " + neat.generation +  " Average: " + avg)
    neat.sort();
    let newPopulation = [];
  
    for(let i = 0; i < neat.elitism; i++){
      newPopulation.push(neat.population[i]);
    }
  
    for(let i = 0; i < neat.popsize - neat.elitism; i++){
      newPopulation.push(neat.getOffspring());
    }
  
    neat.population = newPopulation;
    neat.mutate();
  
    neat.generation++;
    startEval();
}