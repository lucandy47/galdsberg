package com.paw.galdsberg.Controllers;

import com.paw.galdsberg.Entities.User;
import com.paw.galdsberg.Services.JwtUtilService;
import com.paw.galdsberg.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtilService jwtUtilService;

    @GetMapping(path = "")
    public List<User> findUsers()
    {
        return userService.findAllUsers();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> findUser(@PathVariable Integer id){

        User foundUser = userService.findUser(id);
        if(foundUser != null)
        {
            return ResponseEntity.ok(foundUser);
        }
        else
        {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("")
    public ResponseEntity<?> registerUser(@RequestBody User newUser)
    {

        if(userService.checkEmailExists(newUser.getEmail()) == false)
        {

            if(userService.checkUsernameExists(newUser.getUsername()) == false)
            {
                if(userService.addUser(newUser))
                {
                    return new ResponseEntity<Object>(newUser, HttpStatus.CREATED);
                }
                else
                {
                    return ResponseEntity.badRequest().build();
                }
            }
            else{
                return new ResponseEntity<>("Username already exist!", HttpStatus.BAD_REQUEST);
            }

        }
        else
        {
            return new ResponseEntity<>("Email already exist!", HttpStatus.BAD_REQUEST);
        }

    }


    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User requestedUser)
    {
        User foundUser = userService.findUser(requestedUser.getUsername(), requestedUser.getPassword());

        if(foundUser == null)
        {

            return ResponseEntity.notFound().build();
        }
        else{

            String jwt = jwtUtilService.generateToken(foundUser);
            return new ResponseEntity<>(jwt, HttpStatus.ACCEPTED);

        }
    }


    @GetMapping("/get")
    public ResponseEntity<?> getUser( @RequestHeader("Authorization") String authorizationHeader) {

        String jwt = jwtUtilService.getJwtFromAuthorizationHeader(authorizationHeader);
        System.out.println(jwt);
        if(jwt != null && jwtUtilService.validateToken(jwt))
        {
            try {
                User user=userService.findUser(jwtUtilService.extractId(jwt));
                return new ResponseEntity<User>(user,HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id, @RequestHeader("Authorization") String authorizationHeader) {

        String jwt = jwtUtilService.getJwtFromAuthorizationHeader(authorizationHeader);
        if(jwt != null && jwtUtilService.validateToken(jwt))
        {
            try {
                userService.deleteUser(id);
                return new ResponseEntity<Object>(HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody User updatedUser){

        if(userService.updateUser(id, updatedUser))
        {
            return new ResponseEntity<Object>(updatedUser, HttpStatus.OK);
        }
        else
        {
            return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
        }

    }



}
