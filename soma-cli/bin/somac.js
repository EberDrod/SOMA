#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { compileFile } from '../lib/compiler.js';
import { runVM } from '../lib/vm.js';
import { deployContract } from '../lib/deploy.js';

program
  .name('somac')
  .description('CLI para el lenguaje de contratos inteligentes SOMA')
  .version('1.0.0');

program
  .command('compile')
  .argument('<file>', 'Archivo .soma a compilar')
  .action((file) => {
    const result = compileFile(file);
    console.log(chalk.green('✅ Compilación exitosa:\n'), result);
  });

program
  .command('test')
  .argument('<file>', 'Archivo .soma a testear')
  .action((file) => {
    runVM(file);
  });

program
  .command('deploy')
  .argument('<file>', 'Contrato a desplegar')
  .action((file) => {
    deployContract(file);
  });

program.parse();