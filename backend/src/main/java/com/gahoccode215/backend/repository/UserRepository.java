package com.gahoccode215.backend.repository;

import com.gahoccode215.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
