import React from 'react';
import { Box, Flex, Text, Button, Badge } from '@chakra-ui/react';

const BookList = ({ books, onDelete, onMarkAsRead }) => {
  return (
    <Box>
      {books.map(book => (
        <Flex key={book.id} p={4} shadow="md" borderWidth="1px" mt={4}>
          <Box flex="1">
            <Text fontSize="xl">{book.title}</Text>
            <Text fontSize="md" mt={2}>{book.author}</Text>
            <Text fontSize="sm" mt={2}>{book.genre}</Text>
            <Badge colorScheme={book.read ? "green" : "gray"} mt={2}>
              {book.read ? "Read" : "Unread"}
            </Badge>
          </Box>
          <Box>
            <Button colorScheme="red" size="sm" onClick={() => onDelete(book.id)}>Delete</Button>
            {!book.read && (
              <Button ml={2} size="sm" onClick={() => onMarkAsRead(book.id)}>Mark as Read</Button>
            )}
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default BookList;
