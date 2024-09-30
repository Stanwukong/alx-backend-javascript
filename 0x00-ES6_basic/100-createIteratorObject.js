export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;

    return {
        [Symbol.iterator]: function* () {
            for (let department in allEmployees) {
                for (let employee of allEmployees[department]) {
                    yield employee;
                }
            }
        }
    };
}