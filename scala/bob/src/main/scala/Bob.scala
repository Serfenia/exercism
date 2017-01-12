class Bob {
  case class Element(str: String, shout: Boolean, end: String)

  def hey(str: String) : String = {
    val pattern = "[A-Za-z]".r;
    Element(str.trim(), str.toUpperCase() == str && pattern.findFirstIn(str) != None, str.takeRight(1)) match {
      case Element("", _, _) =>  "Fine. Be that way!"
      case Element(_, true, _) =>  "Whoa, chill out!"
      case Element(_, _, "?") => "Sure."
      case _ => "Whatever."
    }
  }
}
