import React from "react"
import { Box, Flex, Link as LinkCh, useColorModeValue } from "@chakra-ui/react"
import ColorThemeSwitcher from "../ColorThemeSwitcher"
import SearchInput from "../SearchInput"
import { Link } from "react-router-dom"

const Header = () => {
  const navBackGround = useColorModeValue("gray.50", "gray.900")
  const navBorder = useColorModeValue("gray.200", "gray.700")
  return (
    <Box
      as='header'
      bg={navBackGround}
      w='100%'
      p='3'
      padding='0.75rem'
      borderBottom='1px'
      borderColor={navBorder}
    >
      <Flex as='nav'>
        <Flex w='150px' alignItems='center'>
          <Link href='/'>
            <LinkCh
              bgGradient='linear(to-l, #7928CA,#FF0080)'
              bgClip='text'
              fontSize={{ base: "1.2em", md: "1.3em" }}
              as='span'
              _hover=''
            >
              Deezer Music
            </LinkCh>
          </Link>
        </Flex>
        <Flex flex='1' justify='flex-end'>
          <SearchInput />
          <ColorThemeSwitcher />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
