module BracketMatching where

-- Determing whether a string (list) of brackets is well-formed: every opening 
-- bracket is matched with exactly one closing bracket, and every opening
-- bracket precedes the closing bracket to which it is matched.
-- Example: 
--    "()(())((()))" is well-formed. 
--    "))(())" is not well-formed
bracketMatch :: String -> Bool
bracketMatch (b:bs) = bracketMatch' (b:bs) 0 
  where
    bracketMatch' "" i = if i == 0 then True else False
    bracketMatch' (b:bs) i
      | i < 0 = False
      | b == '(' = bracketMatch' bs (i+1)
      | b == ')' = bracketMatch' bs (i-1)
