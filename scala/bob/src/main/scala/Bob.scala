class Bob {
  case class Element(str: String, shout: Boolean, end: String)

  def hey(str: String) : String = {
    val pattern = "[A-Za-z]".r;
    Element(str.trim(), str.toUpperCase() == str && pattern.findFirstIn(str) != None, str.takeRight(1)) match {
      case Element("", _, _) => return "Fine. Be that way!";
      case Element(_, true, _) => return "Whoa, chill out!";
      case Element(_, _, "?") => return "Sure.";
      case _ => "Whatever."
    }
  }
}
