import { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Link from "next/link";
import { login, useAuth } from "../components";
import { useRouter } from "next/router";

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

export default function Login() {
  const [auth, { Login }] = useAuth();
  const router = useRouter();

  let validationSchema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Obrigatório"),
    password: yup.string().required("Obrigatório"),
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
    onSubmit: login,
    validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    auth.user && router.push("/agenda");
  }, [auth.user]);

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

        <Box p={4}>
          <Button
            colorScheme="blue"
            width="100%"
            onClick={handleSubmit}
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Box>
        <Link href="/signup">Ainda não tem uma conta? Cadastre-se</Link>
      </Box>
    </Container>
  );
}
