-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-11-2021 a las 19:27:35
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `codo_a_codo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `nacimiento` date NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `provincia` varchar(10) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id`, `nombre`, `apellido`, `nacimiento`, `fecha`, `provincia`) VALUES
(1, 'Feliciano', 'Zamora', '2006-01-04', '2021-11-11 18:13:31', 'B'),
(2, 'Mayra', 'Ramos', '1992-06-25', '2021-11-11 18:15:09', 'C'),
(3, 'Pilar', 'Ledesma', '2021-03-02', '2021-11-11 18:16:26', 'G'),
(4, 'Adriana', 'Cervantes', '2002-11-28', '2021-11-11 18:17:29', 'C'),
(5, 'José Alejandro', 'Barreiro', '2003-12-30', '2021-11-11 18:18:50', 'M'),
(6, 'Gabriela', 'Polo', '2006-04-06', '2021-11-11 18:20:07', 'C'),
(7, 'Ignacio', 'Ruiz', '1978-04-06', '2021-11-11 18:21:07', 'B');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id_provincia` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_provincia` varchar(200) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id_provincia`, `nombre_provincia`) VALUES
('A', 'Salta'),
('B', 'Provincia de Buenos Aires'),
('C', 'Ciudad Autónoma de Buenos Aires'),
('D', 'San Luis'),
('E', 'Entre Ríos'),
('F', 'La Rioja'),
('G', 'Santiago del Estero'),
('H', 'Chaco'),
('J', 'San Juan'),
('K', 'Catamarca'),
('L', 'La Pampa'),
('M', 'Mendoza'),
('N', 'Misiones'),
('P', 'Formosa'),
('Q', 'Neuquén'),
('R', 'Río Negro'),
('S', 'Santa Fe'),
('T', 'Tucumán'),
('U', 'Chubut'),
('V', 'Tierra del Fuego'),
('W', 'Corrientes'),
('X', 'Córdoba'),
('Y', 'Jujuy'),
('Z', 'Santa Cruz');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provincia` (`provincia`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id_provincia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
