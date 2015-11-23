import System.Environment (getArgs)
import BracketMatching

main :: IO ()
main = do
  values <- getArgs
  print . bracketMatch $ head values
