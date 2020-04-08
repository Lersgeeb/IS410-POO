<?php

    class User{
        private $name;
        private $lastname;
        private $birthday;
        private $genre;

        
        public function __construct( $name, $lastname, $birthday, $genre){
            $this->name = $name;
            $this->lastname = $lastname ;
            $this->birthday = $birthday;
            $this->genre = $genre;
        }

        /**
         * Get the value of name
         */ 
        public function getName(){
                return $this->name;
        }

        /**
         * Set the value of name
         *
         * @return  self
         */ 
        public function setName($name){
                $this->name = $name;

                return $this;
        }

        /**
         * Get the value of lastname
         */ 
        public function getLastname(){
                return $this->lastname;
        }

        /**
         * Set the value of lastname
         *
         * @return  self
         */ 
        public function setLastname($lastname){
                $this->lastname = $lastname;

                return $this;
        }

        /**
         * Get the value of birthday
         */ 
        public function getBirthday(){
                return $this->birthday;
        }

        /**
         * Set the value of birthday
         *
         * @return  self
         */ 
        public function setBirthday($birthday){
                $this->birthday = $birthday;

                return $this;
        }

        /**
         * Get the value of genre
         */ 
        public function getGenre(){
                return $this->genre;
        }

        /**
         * Set the value of genre
         *
         * @return  self
         */ 
        public function setGenre($genre){
                $this->genre = $genre;

                return $this;
        }

        public function __toString(){
            return $this->name ." ".$this->lastname.
            " (".$this->birthday.",".$this->genre.")";
        }
    }


?>