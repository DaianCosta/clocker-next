import * as yup from "yup";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../components/Auth";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { Logo } from "../components/Logo";
import {
  Container,
  Box,
  Input,
  Button,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export default function Home() {
  const [auth, { signup }] = useAuth();
  const router = useRouter();

  useEffect(() => {
    auth.user && router.push("/agenda");
  }, [auth.user]);

  let validationSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Obrigatório"),
    password: yup.string().required("Obrigatório"),
    username: yup.string().required("Obrigatório"),
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
  } = useFormik({
    onSubmit: signup,
    validationSchema,
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={4} mt={8}>
        <Text>Crie sua agenda compartilhada</Text>
      </Box>

      <Box>
        <FormControl id="email" p={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && (
            <FormHelperText textColor="#e74c3c">{errors.email}</FormHelperText>
          )}
        </FormControl>

        <FormControl id="password" p={4} isRequired>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && (
            <FormHelperText textColor="#e74c3c">
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl id="username" p={4} isRequired>
          <InputGroup size="lg">
            <InputLeftAddon children="clocker.work" />
            <Input
              type="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            ´
          </InputGroup>
          {touched.email && (
            <FormHelperText textColor="#e74c3c">
              {errors.username}
            </FormHelperText>
          )}
        </FormControl>

        <Box p={4}>
          <Button
            colorScheme="blue"
            width="100%"
            onClick={handleSubmit}
            isLoading={isSubmitting}
          >
            Cadastrar
          </Button>
        </Box>
        <Link href="/">Já possui uma conta? ACesse!</Link>
      </Box>
    </Container>
  );
}
