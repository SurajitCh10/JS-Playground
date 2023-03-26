
      this.running.push(promise);
      this.graphTasks();
    }
  }

}

var delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();
