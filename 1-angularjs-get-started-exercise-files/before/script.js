// Code goes here

var createWorker = function() {
	var hiddenCount = 0;

	var task1 = function() {
		hiddenCount++;
		console.log("task1 " + hiddenCount);
	};
	var task2 = function() {
		hiddenCount++;
		console.log("task2");
	};
	return {
		job1: task1,
		job2: task2
	};
};

var worker = createWorker();

worker.job1();
worker.job2();
worker.job1();
worker.job1();
worker.job1();
worker.job2();
worker.job1();
