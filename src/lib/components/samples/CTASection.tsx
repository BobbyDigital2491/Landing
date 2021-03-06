import { Box, Button, Code, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/sozonome/nextarter-chakra";

const CTASection = () => {
  return (
    <Box textAlign={{ base: "center", md: "left" }} marginTop={8}>
      <Flex
        marginY={4}
        justifyContent={{ base: "center", md: "left" }}
        gridGap={2}
      >
        <Link
          aria-label="Deploy to Vercel"
          isExternal
          rel="noopener noreferrer"
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-chakra"
        >
          <Image src="https://vercel.com/button" alt="Vercel deploy button" />
        </Link>

        <Link
          aria-label="Deploy to Netlify"
          isExternal
          rel="noopener noreferrer"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-chakra"
        >
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </Link>
      </Flex>

      <Box marginY={2}>
        <Button
          marginTop={2}
          as="a"
          href="http://triple-ccc-blog.vercel.app/"
          target="_blank"
          size="sm"
        >
          Visit Our Blog
        </Button>
      </Box>

      <Flex
        justifyContent={{ base: "center", md: "left" }}
        alignItems="center"
        gridGap={2}
      >
        <Button
          as="a"
          href={repoLink}
          target="_blank"
          leftIcon={<AiFillGithub />}
          size="sm"
        >
          Github
        </Button>
        <Link href={repoLink} isExternal rel="noopener noreferrer">
          <Image
            align="center"
            src="https://img.shields.io/github/stars/sozonome/nextarter-chakra?style=social"
            alt="github stars"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default CTASection;
