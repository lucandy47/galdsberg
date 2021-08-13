package com.paw.galdsberg.Services;

import com.paw.galdsberg.Entities.User;
import com.paw.galdsberg.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User findUser(Integer id)
    {
        Optional<User> foundUser = userRepository.findById(id);
        if(foundUser.isPresent())
        {
            return foundUser.get();
        }
        else
        {
            return null;
        }
    }

    public List<User> findAllUsers()
    {
        return userRepository.findAll();
    }

    public User findUser(String username, String password)
    {
        Optional<User> foundUser = userRepository.findByUsernameAndPassword(username, password);
        if(foundUser.isPresent())
        {
            return foundUser.get();
        }
        else
        {
            return null;
        }
    }

    public boolean checkUsernameExists(String username)
    {
        Optional<User> existingUserByUsername = userRepository.findByUsername(username);

        return existingUserByUsername.isPresent();

    }

    public boolean checkEmailExists(String email)
    {
        Optional<User> existingUserByEmail = userRepository.findByEmail(email);
        return existingUserByEmail.isPresent();
    }

    public boolean addUser(User newUser)
    {
        List<User> allUsers=userRepository.findAll();
        newUser.setRole("user");
        newUser.setId(allUsers.get(allUsers.size()-1).getId()+1);
        try {
            userRepository.save(newUser);
            return true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public boolean deleteUser(Integer id)
    {

        try{
            userRepository.deleteById(id);
            return  true;
        }
        catch (Exception e)
        {
            return false;
        }
    }

    public boolean updateUser(Integer id, User newUser)
    {
        Optional<User> foundUser = userRepository.findById(id);
        if(foundUser.isPresent())
        {
            foundUser.get().setUsername(newUser.getUsername());

            foundUser.get().setPassword(newUser.getPassword());

            foundUser.get().setLastName(newUser.getLastName());

            foundUser.get().setFirstName(newUser.getFirstName());

            foundUser.get().setEmail(newUser.getEmail());

            foundUser.get().setRole(newUser.getRole());

            userRepository.save(foundUser.get());

            return true;
        }
        else
        {
            return false;
        }
    }

}
