object SumOfMultiples {
  def sumOfMultiples(factors: Set[Int], limit: Int): Int = {
    var multiples = Array[Int](0);
    factors.foreach(factor => {
      var index = 1;
      while (factor * index < limit) {
        val multiple = factor * index;
        if (!multiples.contains(multiple)) {
          multiples = multiples :+ multiple;
        }
        index += 1;
      }
    })
    multiples.reduceLeft[Int](_+_);
  }
}

