function iterateFromStartNumberToEndNumber(startNumber, endNumber) {
  if (startNumber > endNumber) {
    return;
  }

  console.log(`This is iteration number: ${startNumber}`);
  startNumber++;

  iterateFromStartNumberToEndNumber(startNumber, endNumber);
}

iterateFromStartNumberToEndNumber(1, 11);
console.log('\n============================\n');
iterateFromStartNumberToEndNumber(10, 200);
