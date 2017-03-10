import scala.util.matching.Regex

object RunLengthEncoding {

  def encode(str: String): String = {
    str
      .split("""(?<=(.))(?!\1)""")
      .filter(_.nonEmpty)
      .map(g => (if(g.length() > 1) g.length().toString() else "") + g.charAt(0))
      .mkString("")
  }

  def decode(str: String): String = {
    val r = """([0-9]+)([A-Z])""".r;
    r.findAllIn(str)
      .toList
      .map((s) => s.takeRight(1) * (if(s.length() > 0) s.substring(0, s.length() - 1).toInt else 1))
      .mkString("");
  }
}