function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
      return 'Sunglasses order processed.';
    } else {
      return 'That item is sold out.';
    }
  };

  const orderSunglasses = () => new Promise(executorFunction);